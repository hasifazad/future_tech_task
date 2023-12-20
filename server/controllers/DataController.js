const Data = require("../models/DataModel");

module.exports = {
    //@descrp -- to insert data
    //@route -- POST
    //@access -- public
    setData: async (req, res, next) => {
        let { note } = req.body;

        try {
            let a = await Data.create({ note: note })
            console.log(a);

            if (a) {
                res.json({ status: 'ok', message: 'note inserted successfully' })
            }

        } catch (error) {
            next(error)
        }
    },

    //@descrp -- to get data
    //@route -- GET 
    //@access -- public
    getData: async (req, res, next) => {
        try {
            let allNotes = await Data.find({})
            if (allNotes) {
                res.json({ message: 'fetched all notes successfully', notes: allNotes })
            }
        } catch (error) {
            next(error)
        }
    },


    //@descrp -- to get single data
    //@route -- GET 
    //@access -- public
    getSingleData: async (req, res, next) => {

    },

    //@descrp -- to edit note
    //@route -- PUT 
    //@access -- public
    editData: async (req, res, next) => {
        let { id } = req.params;
        let { note } = req.body;


        try {
            let a = await Data.updateOne({ _id: id }, { note: note })
            if (a) {
                res.json({ message: 'note edited successfully' })
            }
        } catch (error) {
            next(error)
        }

    },

    deleteData: async (req, res, next) => {
        let { id } = req.params;

        try {
            let a = await Data.deleteOne({ _id: id })

            if (a) {
                res.json({ message: 'note deleted successfully' })
            }
        } catch (error) {
            next(error)
        }
    }

}