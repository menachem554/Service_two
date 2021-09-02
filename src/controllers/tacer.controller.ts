import { Request, Response } from 'express';
import axios from 'axios';

// const Path: string = 'http://localhost:5000/api/tachers';

// add new tacher
export const postTacher = async (req: Request, res: Response) => {
  try {
    const tacher = await axios.post(
      'http://school-system:5000/api/tachers/newTacher',
      req.body
    );
    res.send(tacher.data);
  } catch (err: any) {
    res.status(400).send(err);
  }
};

// Print one tacher by ID
export const getTacher = async (req: Request, res: Response) => {
  try {
    const tacherID: number = parseInt(req.query.tacherID as string, 10);
    const tacher = await axios.get(
      'http://school-system:5000/api/tachers/TID',
      {
        params: { tacherID },
      }
    );
    res.status(tacher.status).send(tacher.data);
  } catch (data) {
    res.status(400).json({ data });
  }
};

// Edit tacher
export const editTacher = async (req: Request, res: Response) => {
  try {
    const tacherID: number = parseInt(req.query.tacherID as string, 10);
    const tacher = await axios.put(
      'http://school-system:5000/api/tachers/editTacher',
      req.body,
      {
        params: { tacherID },
      }
    );
    res.status(tacher.status).send(tacher.data);
  } catch (data) {
    res.status(400).json({ data });
  }
};

// Delete tacher
export const delTacher = async (req: Request, res: Response) => {
  try {
    const tacherID: number = parseInt(req.query.tacherID as string, 10);
    const tacher = await axios.delete(
      'http://school-system:5000/api/tachers/del',

      { params: { tacherID } }
    );
    res.status(tacher.status).send(tacher.data);
  } catch (data) {
    res.status(400).json({ data });
  }
};

// Get tacher students list (no Query Params here)
export const getTacherStudents = async (req: Request, res: Response) => {
  try {
    const tacherID: number = parseInt(req.params.tacherID as string, 10);
    const tacher = await axios.get(
      `http://school-system:5000/api/tachers/tacherID/${tacherID}`
    );
    res.status(tacher.status).send(tacher.data);
  } catch (data) {
    res.status(400).json({ data });
  }
};

// Print the outsanding tacher
export const getOutsandingTacher = async (_req: Request, res: Response) => {
  try {
    const tacher = await axios.get(
      `http://school-system:5000/api/tachers/outsanding`
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
