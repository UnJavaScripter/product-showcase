export function config ($logProvider, toastrConfig, $translateProvider) {
    'ngInject';
    // Enable log
    $logProvider.debugEnabled(true);

    // Toastr
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-bottom-right';
    toastrConfig.preventDuplicates = false;
    toastrConfig.progressBar = false;
    toastrConfig.extendedTimeOut = 0;
    toastrConfig.preventOpenDuplicates = true

    // Translate
    $translateProvider.useSanitizeValueStrategy('escape');

    $translateProvider.translations('es', {
        'by': 'por',

        'Getting_more_data': 'Obteniendo más información',

        'I_couldnt_get_data': 'No pude obtener iformación',

        'I_couldnt_get_more_data': 'No pude obtener más iformación',
        
        'Looking_for_something?': '¿Buscas algo?',

        'Ooops': '¡Recorcholis!',

        'Retry': 'Volver a intentarlo',

        'Seems_like_there_is_no_data_here': 'Parece que no hay información por aquí',

        'You_can': 'Puedes'
        
    });
    $translateProvider.translations('en', {
        'by': 'by',

        'Getting_more_data': 'Getting more data',

        'I_couldnt_get_data': 'I couldn\'t get data',

        'I_couldnt_get_more_data': 'I couldn\'t get more data',
        
        'Looking_for_something?': 'Looking for something?',

        'Ooops': 'Ooops!',

        'Retry': 'Retry',

        'Seems_like_there_is_no_data_here': 'Seems like there is no data here',

        'You_can': 'You can'
        
    });

    $translateProvider.preferredLanguage('en');

}
