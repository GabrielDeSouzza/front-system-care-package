import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    generates: {
        "src/generated/graphql.ts": {
            plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
            config: {
                withHooks: true,
                withHOC: false,
                withComponent: false,
                skipTypename: true,
                avoidOptionals: true,
                namingConvention: {
                    typeNames: "change-case#pascalCase",
                    enumValues: "change-case#upperCase",
                },
            },
        },
    },
    schema: "http://localhost:4000/graphql",
    documents: ["src/**/*.graphql", "src/**/*.gql"],
};

export default config;