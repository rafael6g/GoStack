This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## .ESLINTRC.JS

module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        // 'plugin:react/recommended',
        'airbnb',
        'prettier',
        'prettier/react',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        'react',
        'prettier',
    ],
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
        'warn',
          { extensions: ['.jsx', '.js'] }
      ],
      'import/prefer-default-export': 'off'
    },
};


### .PRETTIERRC

{
  "singleQuote": true,
  "trailingComma": "es5"
}


### .editorConfig

root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true


## BIBLIOTECAS

> yarn add polished
- Lida com cor dentro do javascript, ela consegue escurer, clarear e transparencias { darken }

## configurar uma API SERVER PARA RODAR
Instalar
> yarn global add json-server

iniciar o servico json de api server
comando: json-server <nomeDoArquivo>.json -p <porta> -w
> json-server server.json -p 3333 -w

-w : e para ficar ouvido e toda fez que alterar o arquivo ele restart o servidor
