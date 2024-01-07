## Code To Image Web Application

### Architecture

Setup was started by creating a wireframe which serves as an adumbration of the code editor, with this the placement of each feature is predetermined.

![Wireframe-Screenshot](./public/wireframe.png)

## Description

The code editor was created using the [react-ace](https://www.npmjs.com/package/react-ace) package among other tools.

```bash
   import AceEditor from "react-ace";

      <AceEditor
        value="function() {return 'Hello'}"
        name="UNIQUE_ID_OF_DIV"
        theme="cobalt"
        mode={"javascript"}
        wrapEnabled
        fontSize={14}
        highlightActiveLine
        showGutter={false}
        showPrintMargin={false}
        editorProps={{ $blockScrolling: true }}
      />
```

For ease of resizing the editor, the [re-resizable](https://www.npmjs.com/package/re-resizable) package was used.

```bash
   import { Resizable } from "re-resizable";

    <Resizable maxWidth={1000} minHeight={460} minWidth={500}>
      <AceEditor
        value="function() {return 'Hello'}"
        name="UNIQUE_ID_OF_DIV"
      />
    </Resizable>
```

## Getting Started

First, run the development server:

```bash
npm install

# or possibly you could decide whatever package manager suits you as listed below

yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

Deployment is on vercel
