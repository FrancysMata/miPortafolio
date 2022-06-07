const path= require ('path');

const menucontrollers = {
    index: (req, res) => { res.render('index')

    },

    about: (req, res) => { res.render ('about')
    },

    resume:(req, res) => { res.render ('resume')}
}

module.exports = menucontrollers