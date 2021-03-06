export default function(dependecies){

    let runner = {};

    runner.start = () => {

        let layout = dependecies.layout();

        let root = dependecies.root();

        let layoutHtml = layout.toHtmlElement();

        dependecies.assets();

        dependecies.icons();

        root.appendChild(layoutHtml);
    }

    return runner;
}