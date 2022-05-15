import CustomLoader from './custom-loader';
LocalStrings.setContent({
    en: {
        'app.mdpkm.common.loaders.custom_example': 'Custom Loader',

        'app.plugin.example_plugin.toast.test_message': 'This is a message from the mdpkm Example Plugin!'
    }
});

await API.add('CustomLoader', new CustomLoader());