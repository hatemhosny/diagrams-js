# Security Policy

## Supported Versions

We release security updates for the following versions:

| Version  | Supported          |
| -------- | ------------------ |
| Latest   | :white_check_mark: |
| < Latest | :x:                |

We strongly recommend always using the latest version to ensure you have the most recent security fixes.

## Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability, please report it responsibly.

### How to Report

**Please DO NOT file a public issue** on GitHub for security vulnerabilities.

Instead, please report security vulnerabilities via one of the following methods:

1. **GitHub Security Advisory**: [Report a vulnerability](https://github.com/hatemhosny/diagrams-js/security/advisories/new)
2. **Email**: Send details to [security@example.com](mailto:security@example.com)

### What to Include

When reporting a vulnerability, please include:

- **Description**: Clear description of the vulnerability
- **Impact**: What could an attacker do with this vulnerability?
- **Steps to reproduce**: Detailed steps to reproduce the issue
- **Affected versions**: Which versions are affected?
- **Proof of concept**: If available, include a minimal proof of concept
- **Suggested fix**: If you have suggestions for fixing the vulnerability

### Response Timeline

We aim to respond to security reports within:

- **48 hours**: Acknowledgment of receipt
- **7 days**: Initial assessment and next steps
- **30 days**: Resolution or workaround (if applicable)

## Security Considerations

### When Using This Library

1. **SVG Rendering**: The library generates SVG output. Always sanitize SVG content if displaying user-generated diagrams in a web context.

2. **External Icons**: When using custom nodes with external URLs:
   - Validate URLs before use
   - Be cautious with user-provided URLs
   - Consider using data URIs for untrusted sources

3. **Node.js File System**: When loading local icon files:
   - Validate file paths
   - Restrict to allowed directories
   - Be aware of path traversal risks

4. **Dependencies**: Keep dependencies up to date by running:
   ```bash
   pnpm audit
   ```

### Known Security Features

- **No eval() or Function()**: The library does not use dangerous JavaScript evaluation
- **Content Security Policy**: The library works with strict CSP configurations
- **No network requests**: The library does not make network requests (except for optional external icons)

## Security Best Practices

### For Contributors

- Never commit secrets, API keys, or credentials
- Use parameterized inputs where applicable
- Validate all external inputs
- Follow secure coding practices
- Keep dependencies updated

### For Users

```typescript
// Safe: Using built-in providers
import { AWS } from "diagrams-js";
const ec2 = AWS.Compute.EC2("Server");

// Caution: Validate external URLs
const userProvidedUrl = getUserInput();
if (isValidUrl(userProvidedUrl)) {
  const node = new Custom("Label", userProvidedUrl);
}

// Safe: Using data URIs for user content
const node = new Custom("Label", "data:image/png;base64,...");
```

## Disclosure Policy

When we receive a security report:

1. We will confirm receipt within 48 hours
2. We will investigate and assess the severity
3. We will develop and test a fix
4. We will release a patched version
5. We will publish a security advisory
6. We will credit the reporter (unless they prefer anonymity)

## Security-Related Configuration

### Package Manager

This project uses pnpm with lock files to ensure reproducible builds:

```bash
# Install dependencies (uses lock file)
vp install --frozen-lockfile

# Audit dependencies
pnpm audit

# Update dependencies
pnpm update
```

### GitHub Security Features

This repository uses:

- **Dependabot**: Automated dependency updates
- **CodeQL**: Static analysis for security vulnerabilities
- **Secret scanning**: Detection of accidentally committed secrets
- **Security advisories**: Private reporting and discussion of vulnerabilities

## Acknowledgments

We thank the following security researchers who have responsibly disclosed vulnerabilities:

_No vulnerabilities have been reported yet. Be the first responsible disclosure!_

## Contact

For security-related questions or concerns, please contact:

- Security Team: [security@example.com](mailto:security@example.com)
- Project Maintainers: See [package.json](diagrams-js/package.json) for maintainer information

---

Last updated: 2026-04-07
