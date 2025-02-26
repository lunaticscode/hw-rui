import fetch from "node-fetch";
import { Command } from "commander";
import prompts from "prompts";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://hw-lab.site"
    : "http://localhost:8080";

const componentsJsonUrl = `${baseUrl}/registry/components`;

interface ComponentStatus {
  packageName: string;
}

interface ComponentData {
  active: string[];
  status: Record<string, ComponentStatus>;
}

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
  let activeComponents: ComponentData["active"] | undefined;
  if (requestComponentsJson.ok) {
    const response = (await requestComponentsJson.json()) as ComponentData;
    activeComponents = response.active;
  } else {
    console.error(
      "(!)Cannot load components.json from `" + componentsJsonUrl + "`"
    );
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
    .action(async (components, _options) => {
      // console.log(components, options);
      const installableComponents: string[] = components.filter(
        (comp: string) => activeComponents.includes(comp)
      );

      if (!installableComponents || !installableComponents.length) {
        // select components from prompt
        const { selectedComponents = [] }: { selectedComponents: string[] } =
          await prompts({
            type: "multiselect",
            name: "selectedComponents",
            message: "Select from the installable components below.",
            hint: "Space to select. A to toggle all. Enter to submit.",
            choices: activeComponents.map((comp) => ({
              title: comp,
              value: `@hw-rui/${comp.toLocaleLowerCase()}`,
            })),
          });

        if (selectedComponents && selectedComponents.length) {
          for (const componentPackageName of selectedComponents) {
            console.log(`Install ${componentPackageName} .....`);
          }
        }
      } else {
      }
    });

  addCommand.parse();
};

exec();
