module.exports= (plop) => {
    plop.setGenerator('src', {
      description: '生成组件',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: '请输入组件名？',
        },
        {
          type: 'input',
          name: 'file',
          message: '请输入文件名？',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/{{name}}/index.md',
          templateFile: 'templates/index.md',
        },
        {
          type: 'add',
          path: 'src/{{name}}/index.tsx',
          templateFile: 'templates/index.tsx',
        },
        {
          type: 'add',
          path: 'src/{{name}}/index.ts',
          templateFile: 'templates/index.ts',
        },
        {
          type: 'add',
          path: 'src/{{name}}/demos/index.tsx',
          templateFile: 'templates/demos/index.tsx',
        },
        {
          type: 'add',
          path: 'src/{{name}}/styles/index.less',
        },
        {
          type: 'append',
          path: 'src/index.ts',
          pattern: /(\/\/ -- APPEND ITEMS HERE --)/gi,
          template: 'export { default as {{name}} } from \'./{{name}}\'; ',
        },
      ],
    });
  };
  