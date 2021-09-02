import { Request, Response } from 'express';
import axios from 'axios';

// const Path: string = 'http://localhost:5000/api/tachers';

// add new student
export const postStudent = async (req: Request, res: Response) => {
  try {
    const student = await axios.post(
      'http://school-system:5000/api/students/newStudent',
      req.body
    );
    res.send(student.data);
  } catch (err: any) {
    res.status(400).send(err);
  }
};

// Print one student by ID
export const getStudent = async (req: Request, res: Response) => {
  try {
    const studentID: number = parseInt(req.query.studentID as string, 10);
    const student = await axios.get(
      'http://school-system:5000/api/students/SID',
      {
        params: { studentID },
      }
    );
    res.status(student.status).send(student.data);
  } catch (data) {
    res.status(400).json({ data });
  }
};

// Edit student
export const editStudent = async (req: Request, res: Response) => {
  try {
    const studentID: number = parseInt(req.query.studentID as string, 10);
    const student = await axios.put(
      'http://school-system:5000/api/students/editstudent',
      req.body,
      { params: { studentID } }
    );
    res.status(student.status).send(student.data);
  } catch (data) {
    res.status(400).json({ data });
  }
};

// Delete student
export const delStudent = async (req: Request, res: Response) => {
  try {
    const studentID: number = parseInt(req.query.studentID as string, 10);
    const student = await axios.delete(
      'http://school-system:5000/api/students/del',

      { params: { studentID } }
    );
    res.status(student.status).send(student.data);
  } catch (data) {
    res.status(400).json({ data });
  }
};

// Get student students list (no Query Params here)
export const getStudentProfession = async (req: Request, res: Response) => {
  try {
    const studentID: number = parseInt(req.params.studentID as string, 10);
    const student = await axios.get(
      `http://school-system:5000/api/students/studentID/${studentID}`
    );
    res.status(student.status).send(student.data);
  } catch (data) {
    res.status(400).json({ data });
  }
};

// Print the outsanding student
export const getTacherlesStudent = async (_req: Request, res: Response) => {
  try {
    const tacher = await axios.get(
      `http://school-system:5000/api/students/tacherles`
    );
    res.send(tacher.data);
  } catch (data) {
    res.status(500).json({ data });
  }
};

export const test = async (_req: Request, res: Response) => {
  try {
    console.log('aiiaii');
    res.send('success');
  } catch (data) {
    res.status(400).json({ data });
  }
};
