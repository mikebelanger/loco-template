import config from "../../config/development.yaml";

export class HTMLDump extends HTMLElement {
    private endpoint: string | undefined;
    private call_url: string | undefined;

    constructor() {
        super();
        this.endpoint = this.attributes.getNamedItem("endpoint")?.value;
        this.call_url = `${config.server.host}:${config.server.port}/`;
    }

    connectedCallback() {
        this.addEventListener("get", async (ev: Event) => {
            this.getAll();
        });
    }

    async getAll(): Promise<string | undefined> {
        if (!this.endpoint) return;
        const results = await fetch(this.call_url + this.endpoint)
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                this.render(data);
            });
    }

    render(html: string) {
        this.innerHTML = html;
    }
}

export class MovieView extends HTMLDump {
    constructor() {
        super();
    }
}
