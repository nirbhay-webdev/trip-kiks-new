function config($logProvider, $compileProvider) {
    'ngInject';
    // Enable log
    $logProvider.debugEnabled(true);

    //for cache urls
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile|content):|data:image\//);

}

export default config;
