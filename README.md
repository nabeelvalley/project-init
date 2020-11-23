![Publish Node.js Package](https://github.com/nabeelvalley/project-init/workflows/Publish%20Node.js%20Package/badge.svg)

# Starter Templates

Preconfigured Starter templates for different frameworks, languages, and configurations

## Usage

```sh
npx @nabeelvalley/project-init
```

And then select a template and a name for your project. The CLI will then initialize a template with your file contents in the selected directory

## Included Templates

### Typescript Static

The `ts-static` template is a Typescript template for a static site using:

- `typescript` as the language and `tsc --watch` to scan for errors
- `parcel` to compile the application and run the development server
- `concurrently` to run the dev server and error watch at the same time
- A `.prettierrc` config file for formatting with Prettier

### Typescript Node

The `ts-node` template is a Typescript template for Node.js applications using:

- `typescript` as the language and the Typescript compiler to compile
- Includes a `.vscode/launch.json` for debugging
- A `.prettierrc` config file for formatting with Prettier

### Gatsby + MDX + Tailwind

The `gatsby-mdx-tailwind` template is a Javascript Gatsby template using:

- `mdx` for page generation
- `tailwindcss` for styling
- `framer motion` is installed for animations, but the template does not use it
- A `.prettierrc` config file for formatting with Prettier
