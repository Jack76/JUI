# JUI

A modern, reusable React component library built with TypeScript, Emotion, and Storybook, designed for consistent and accessible UI development.

## Table of Contents

- Features
- Installation
- Usage
- Components
- Development
- Contributing
- License

## Features

- **TypeScript Support**: Fully typed components for better developer experience and type safety.
- **Emotion Styling**: CSS-in-JS with Emotion for scoped, maintainable styles.
- **Storybook Integration**: Interactive component demos and documentation.
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA attributes.
- **Design Tokens**: Centralized tokens for colors, spacing, typography, and more.
- **Customizable**: Flexible props for variants, sizes, and themes.
- **Lightweight**: Optimized for performance with minimal dependencies.

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Jack76/JUI.git
cd JUI
npm install
```

## Usage

To use the library in your React project, install it as a dependency (if published to npm):

```bash
npm install @jack76/jui
```

Import and use components in your application:

```jsx
import React from 'react';
import { Tag } from '@jack76/jui';

const App = () => (
  <div>
    <Tag label="Success" variant="success" />
  </div>
);

export default App;
```

## Components Example

The library includes the following components:

### Tag

A versatile tag component with support for variants, sizes, and tooltips.

- **Props**:

  - `label`: string (required)
  - `variant`: 'default' | 'success' | 'warning' | 'error'
  - `size`: 'small' | 'medium' | 'large'
  - `removable`: boolean
  - `clickable`: boolean
  - `disabled`: boolean
  - `isSelected`: boolean
  - `icon`: ReactNode
  - `fluid`: boolean
  - `maxWidth`: string
  - `onClick`: (label: string) =&gt; void
  - `onRemove`: (label: string) =&gt; void

- **Example**:

```jsx
<Tag
  label="Completed"
  variant="success"
  removable
  onRemove={() => console.log('Removed')}
/>
```


## Development

To develop and test the library locally:

1. **Start Storybook**:

```bash
npm run storybook
```

This will launch Storybook at `http://localhost:6006` to preview components.

2. **Build the library**:

```bash
npm run build
```

3. **Run tests** (if tests are set up):

```bash
npm test
```

### Project Structure Example

```
JUI/
├── src/
│   ├── components/
│   │   ├── core/
│   │   │   ├── tag/
│   │   │   │   ├── tag.tsx
│   │   │   │   ├── tag.stories.tsx
│   │   ├── iconComponent/
│   ├── styles/
│   │   ├── tokens.css
├── .storybook/
├── package.json
├── tsconfig.json
```

### Scripts

- `npm start`: Run the development server (if applicable).
- `npm run storybook`: Start Storybook.
- `npm run build`: Build the library.
- `npm run lint`: Run ESLint.
- `npm run format`: Format code with Prettier.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -m 'Add my feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a Pull Request.

Please ensure your code follows the project's linting and formatting rules.

## License

This project is licensed under the MIT License. See the LICENSE file for details.