
export const postToUrl = (path, params={}) => {

    let form = document.createElement("form");
    form.setAttribute("method", 'POST');
    form.setAttribute("action", path);

    let addField = function( key, value ){
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", value );

        return hiddenField;
    };

    for (var key in params) {
        if ( !params.hasOwnProperty(key)) continue;

        if ( params[key] instanceof Array ){
            for (var i = 0; i < params[key].length; i++){
                form.appendChild( addField( key, params[key][i] ) );
            }
        }
        else{
            form.appendChild( addField( key, params[key] ));
        }
    }

    document.body.appendChild(form);
    form.submit();
};


export default {postToUrl};
