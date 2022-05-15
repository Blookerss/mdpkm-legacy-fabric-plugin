import Manifest from './manifest';
import IconImage from './assets/img/icon.svg';
import BannerImage from './assets/img/banners/custom-loader.svg';
export default class CustomLoader extends PluginSystem {
    constructor() {
        super(Manifest.id);
    }

    async init() {
        this.addLoader('custom_example', 'Custom Loader', {
            icon: IconImage,
            banner: BannerImage,
            description: 'This is a custom loader from the mdpkm Example Plugin!'
        });
        toast(LocalStrings['app.plugin.example_plugin.toast.test_message']);
    }

    async getVersions() {
        return {
            '1.18.2': ['1.18.2-1.0.0']
        };
    }

    async downloadManifest(path, game, version) {
        const manifest = await API.makeRequest(
            `https://mdpkm.voxelified.com/example-plugin/manifest.json`
        );
        await Util.writeFile(path, JSON.stringify(manifest));
    }
};