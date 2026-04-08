import React, { useEffect, useState, useCallback } from "react";
import LiveCodes from "livecodes/react";
import { useColorMode } from "@docusaurus/theme-common";
import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from "lz-string";
import styles from "./styles.module.css";
import { examples } from "./examples";

const imports = {
  // "diagrams-js": "http://localhost:3300/dist/index.js",
  // "diagrams-js/": "http://localhost:3300/dist/providers/",
};

// Default config for LiveCodes
const defaultConfig = {
  title: "diagrams-js Playground",
  description: "Interactive diagrams-js playground",
  mode: "simple",
  activeEditor: "script",
  editor: "auto",
  markup: {
    language: "html",
    content: '<div id="diagram"></div>',
  },
  script: {
    language: "javascript",
    content: examples[0].config.script.content,
  },
  imports,
};

export default function Playground(): React.JSX.Element {
  const { colorMode } = useColorMode();
  const [playground, setPlayground] = useState<any>(null);
  const [selectedExample, setSelectedExample] = useState<string>("");
  const [currentConfig, setCurrentConfig] = useState({
    ...defaultConfig,
    theme: colorMode,
  });
  const [shareCopied, setShareCopied] = useState(false);

  // Update playground theme when color mode changes
  useEffect(() => {
    if (playground) {
      void playground.setConfig({ theme: colorMode });
    }
  }, [colorMode, playground]);

  // Load config from URL hash on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#config/")) {
      try {
        const compressed = hash.substring(8); // Remove '#config/'
        const decompressed = decompressFromEncodedURIComponent(compressed);
        if (decompressed) {
          const parsed = JSON.parse(decompressed);
          // Ensure theme matches current color mode
          setCurrentConfig({
            ...parsed,
            theme: colorMode,
          });
          // Try to find matching example name
          const matching = examples.find((e) => e.config.script.content === parsed.script?.content);
          if (matching) {
            setSelectedExample(matching.name);
          } else {
            setSelectedExample("");
          }
        }
      } catch (e) {
        console.error("Failed to load config from URL:", e);
      }
    } else {
      // No config in URL, auto-select the first example
      setSelectedExample(examples[0].name);
    }
  }, []);

  // Handle example selection
  const handleExampleChange = useCallback(
    async (e: React.ChangeEvent<HTMLSelectElement>) => {
      const name = e.target.value;
      setSelectedExample(name);

      const example = examples.find((ex) => ex.name === name);
      if (example && playground) {
        await playground.setConfig({
          ...defaultConfig,
          ...example.config,
          theme: colorMode,
        });
      }
    },
    [playground, colorMode],
  );

  // Share current code
  const handleShare = useCallback(async () => {
    if (!playground) return;

    try {
      const config = await playground.getConfig();
      const json = JSON.stringify(config);
      const compressed = compressToEncodedURIComponent(json);
      const url = `${window.location.origin}${window.location.pathname}#config/${compressed}`;

      await navigator.clipboard.writeText(url);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch (e) {
      console.error("Failed to share:", e);
    }
  }, [playground]);

  return (
    <div className={styles.playgroundContainer}>
      <div className={styles.controls}>
        <div className={styles.selectWrapper}>
          <label htmlFor="example-select">Example: </label>
          <select
            id="example-select"
            value={selectedExample}
            onChange={handleExampleChange}
            className={styles.select}
          >
            <option value="">-- Select an example --</option>
            {examples.map((ex) => (
              <option key={ex.name} value={ex.name}>
                {ex.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.buttons}>
          <button
            onClick={handleShare}
            className={
              "button " + styles.button + (shareCopied ? " button--success" : " button--primary")
            }
            disabled={shareCopied}
          >
            {shareCopied ? "Copied!" : "Share"}
          </button>
        </div>
      </div>

      <div className={styles.livecodesWrapper}>
        <LiveCodes loading="eager" config={currentConfig} sdkReady={setPlayground} height="80vh" />
      </div>
    </div>
  );
}
