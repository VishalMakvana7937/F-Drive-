import stumodel from "../modal/studentsmodule.js";

export const defaultcontroller = async (req, res) => {
    try {
        res.json({ msg: 'Hello students...:)!' });
    } catch (err) {
        console.log(err);
    }
};

export const poststudent = async (req, res) => {
    try {
        const { name, email, contact } = req.body;
        const students = new stumodel({
            name,
            email,
            contact
        })
        console.log('Students...', students);
        await students.save();
        res.json({ msg: `student is update`, data: students });
    } catch (err) {
        console.log('Error...', err);
    }
}

export const getstudent = async (req, res) => {
    try {
        let { id } = req.params;
        console.log("id", id);
        let students = await stumodel.findById({ _id: id });
        res.json({ msg: `${id} student`, data: students });
    } catch (err) {
        console.log('Error...', err);
    }
}

export const putstudent = async (req, res) => {
    try {
        let { id } = req.params;
        let updatestudentdata = req.body;
        let updatedata = await stumodel.findByIdAndUpdate(id, updatestudentdata);
        res.json({ msg: `${id} student is update`, data: updatedata });
    } catch (err) {
        console.log('Error...', err);
    }
}

export const deletestudent = async (req, res) => {
    try {
        let { id } = req.params
        let deletestudent = await stumodel.findByIdAndDelete(id);
        res.json({ msg: `${id} student is delete`, data: deletestudent });
    } catch (err) {
        console.log('Error...', err);
    }
}