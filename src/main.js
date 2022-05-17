import FabricLegacy from './fabric-legacy';
LocalStrings.setContent({
    en: {
        'app.mdpkm.common.loaders.fabric_legacy': 'Legacy Fabric',
        'app.mdpkm.common.loaders.fabric_legacy.summary': 'Legacy Fabric is a project based on the Fabric Project.\nOne of its priorities is to support as many legacy versions as possible.'
    }
});

await API.add('FabricLegacy', new FabricLegacy());