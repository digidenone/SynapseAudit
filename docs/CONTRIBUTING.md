# Contributing to SynapseAudit

Thank you for your interest in contributing to SynapseAudit! We welcome contributions from the community.

## Getting Started

1. **Fork the Repository**: Fork the SynapseAudit repository to your GitHub account.

2. **Clone Your Fork**: Clone your forked repository to your local machine.
   ```bash
   git clone https://github.com/YOUR_USERNAME/SynapseAudit.git
   cd SynapseAudit
   ```

3. **Install Dependencies**: 
   ```bash
   # For the VS Code extension
   npm install
   
   # For the backend
   cd backend
   pip install -r requirements.txt
   ```

## Development Setup

### VS Code Extension Development

1. Open the project in VS Code
2. Press `F5` to launch the Extension Development Host
3. Make your changes to the TypeScript files in the `src/` directory
4. The extension will automatically reload when you make changes

### Backend Development

1. Navigate to the `backend/` directory
2. Start the development server:
   ```bash
   python app.py
   ```
3. The API will be available at `http://localhost:8000`
4. API documentation is available at `http://localhost:8000/docs`

## Code Style

### TypeScript/JavaScript
- Use TypeScript for all new code
- Follow the existing code style and naming conventions
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### Python
- Follow PEP 8 style guidelines
- Use type hints where appropriate
- Add docstrings to all functions and classes
- Use meaningful variable and function names

## Submitting Changes

1. **Create a Branch**: Create a new branch for your feature or bug fix.
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**: Implement your feature or bug fix.

3. **Test Your Changes**: Ensure your changes work correctly and don't break existing functionality.

4. **Commit Your Changes**: Write clear, concise commit messages.
   ```bash
   git add .
   git commit -m "Add feature: description of your changes"
   ```

5. **Push to Your Fork**: Push your changes to your forked repository.
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**: Open a pull request from your branch to the main repository.

## Pull Request Guidelines

- Provide a clear description of what your PR does
- Include screenshots or GIFs if your changes affect the UI
- Reference any related issues
- Make sure all tests pass
- Update documentation if necessary

## Reporting Issues

When reporting issues, please include:

- A clear description of the problem
- Steps to reproduce the issue
- Expected vs. actual behavior
- Your operating system and VS Code version
- Any relevant error messages or logs

## Feature Requests

We welcome feature requests! Please provide:

- A clear description of the feature
- The use case or problem it solves
- Any implementation ideas you might have

## Code of Conduct

Please be respectful and constructive in all interactions. We want to maintain a welcoming and inclusive environment for all contributors.

## Questions?

If you have any questions about contributing, feel free to:

- Open an issue for discussion
- Reach out to the maintainers
- Check the existing documentation

Thank you for contributing to SynapseAudit!
