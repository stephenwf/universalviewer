import {BaseEvents} from "../../modules/uv-shared-module/BaseEvents";
import {CenterPanel} from "../../modules/uv-shared-module/CenterPanel";

export class HelloWorldCenterPanel extends CenterPanel {

    title: string | null;
    $imageContainer: JQuery;

    constructor($element: JQuery) {
        super($element);
    }

    create(): void {

        this.setConfig('helloWorldCenterPanel');

        super.create();

        $.subscribe(BaseEvents.OPEN_EXTERNAL_RESOURCE, (e: any, resources: any[]) => {
            this.openMedia();
        });

        this.$imageContainer = $('<div />');
        this.$imageContainer.addClass('static-image-container');

        this.$content.append($(`<h1 class="hello-world-heading">${this.content.message}</h1>`));

        this.$content.append(this.$imageContainer);

        this.title = this.extension.helper.getLabel();
    }

    openMedia() {
        this.$imageContainer.empty();
        const image = document.createElement('img');

        const canvas: Manifesto.ICanvas = this.extension.helper.getCurrentCanvas();

        image.src = canvas.getCanonicalImageUri(400);
        image.width = 400;

        this.$imageContainer.append([image]);
    }
}
