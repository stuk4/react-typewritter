# React Typewriter

This library is an implementation of a typewriter effect.

## Usage

### `TypeWriter` component

To use the `<TypeWriter> `component, you need pass it the following props:

| Name            | Type                | Default    | Description                                                     |
| --------------- | ------------------- | ---------- | --------------------------------------------------------------- |
| **elementType** | `string`            | `required` | Is the element to render                                        |
| **text**        | `string`            | `required` | A string to apply the effect..                                  |
| **interval**    | `number (optional)` | `20`       | The interval between character writed                           |
| **classNames**  | `string (optional)` | `""`       | ClassName to add to the Element created                         |
| **delay**       | `number (optional)` | `0`        | A number indicating the delay in milliseconds to start to write |

Example:

```tsx
import { TypeWriter } from "./components/TypeWriter";

export const Example = () => {
  return (
    <TypeWriter elementType="p" text={`Hello world, \n\n This is a test`} />
  );
};
```

### `TypeWriterInView` component

To use the `<TypeWriterInView> `component, the principal diference between the normal is that it uses the library [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) for show the element when is in the viewport . You need pass it the following props:

| Name            | Type                | Default    | Description                                                     |
| --------------- | ------------------- | ---------- | --------------------------------------------------------------- |
| **elementType** | `string`            | `required` | Is the element to render                                        |
| **text**        | `string`            | `required` | A string to apply the effect..                                  |
| **interval**    | `number (optional)` | `20`       | The interval between character writed                           |
| **classNames**  | `string (optional)` | `""`       | ClassName to add to the Element created                         |
| **delay**       | `number (optional)` | `0`        | A number indicating the delay in milliseconds to start to write |

Example:

```tsx
import { TypeWriterInView } from "./components/TypeWriterInView";

export const Example = () => {
  return (
    <TypeWriterInView
      elementType="p"
      text={`Hello world, \n\n This is a test`}
    />
  );
};
```

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that adds optional static typing
- [Vite](https://github.com/vitejs/vite) - A development server that allows for instant development and hot-module replacement

## Dependencies

- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) - A React component for the Intersection Observer API
