import Manifest from './manifest';
import IconImage from './assets/img/icons/legacy-fabric.svg';
import BannerImage from './assets/img/banners/legacy-fabric.svg';

const FABRIC_API_BASE = 'https://meta.legacyfabric.net/v2';
export default class FabricLegacy extends PluginSystem {
    type = 'java-modded';
    
    constructor() {
        super(Manifest.id);
    }

    async init() {
        this.addLoader('fabric_legacy', LocalStrings['app.mdpkm.common.loaders.fabric_legacy'], {
            icon: IconImage,
            type: this.type,
            banner: BannerImage,
            asLoader: 'fabric',
            description: LocalStrings['app.mdpkm.common.loaders.fabric_legacy.summary']
        });
    }

    async getVersions() {
        return API.makeRequest(`${FABRIC_API_BASE}/versions`).then(versions => {
            const fabric = {};
            const loaders = versions.loader.map(y => y.version);
            for (const { version } of versions.game)
                fabric[version] = loaders;
            return fabric;
        });
    }

    async downloadManifest(path, game, version) {
        const manifest = await this.API.makeRequest(
            `${FABRIC_API_BASE}/versions/loader/${encodeURIComponent(game)}/${encodeURIComponent(version)}/profile/json`
        );
        await Util.writeFile(path, JSON.stringify(manifest));
    }
};