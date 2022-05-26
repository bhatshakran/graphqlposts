'use strict';

const common = require('@graphql-cli/common');
const cli = require('@graphql-codegen/cli');

const index = common.defineCommand(api => {
    return {
        command: 'codegen',
        builder(yargs) {
            return yargs.options(cli.buildOptions());
        },
        async handler(args) {
            const config = await api.useConfig({
                rootDir: args.config || process.cwd(),
                extensions: [cli.CodegenExtension],
            });
            // Create Codegen Context with our loaded GraphQL Config
            const codegenContext = new cli.CodegenContext({
                graphqlConfig: config,
            });
            // This will update Codegen Context with the options provided in CLI arguments
            cli.updateContextWithCliFlags(codegenContext, args);
            await cli.generate(codegenContext);
        },
    };
});

module.exports = index;
