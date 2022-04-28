export default {

    content(){
        return '<h1>ola mundo</h1>'
    },

    style(){
        return {
            backgroundColor: 'blue',
        }
    },

    children(){
        return [{
            content(){
                return 'filho1';
            },
            children(){
                return {
                    content(){
                        return 'filho do filho 1'
                    }
                }
            }
        },
        {
            content(){
                return 'filho2';
            }
        }
    ]
    }

}