import fetch from "node-fetch";
import { Command } from "commander";
const baseUrl = process.env.NODE_ENV === "production"
    ? "https://hw-rui.guide.com"
    : "http://localhost:5173";
const componentsJsonUrl = `${baseUrl}/registry/components.json`;
process.on("SIGINT", () => {
    console.log("(!)Exit process from [ctrl + c].");
    process.exit(1);
});
process.on("SIGTERM", () => {
    console.log("(!)Exit process from forced terminate process.");
    process.exit(1);
});
const exec = async () => {
    const requestComponentsJson = await fetch(componentsJsonUrl);
    let activeComponents;
    if (requestComponentsJson.ok) {
        const response = (await requestComponentsJson.json());
        activeComponents = response.active;
    }
    else {
        console.error("(!)Cannot load components.json from `" + componentsJsonUrl + "`");
        process.exit(1);
    }
    if (!activeComponents || (activeComponents && !activeComponents.length)) {
        console.log("Sorry, There are currently no installable components.");
        process.exit(0);
    }
    const addCommand = new Command()
        .name("add")
        .description("add components to your project")
        .argument("[components...]", "install components")
        .action((components, options) => {
        console.log(components, options);
    });
    addCommand.parse();
};
exec();
