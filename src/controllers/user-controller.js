const db = require("../models");
const { generateResponse } = require("../utils/generateResponse");

async function signIn(req, res, next) {
  const { uid, email } = req.user;

  try {
    const response = await db.User.findOne({ email: email });

    if (!response) {
      return res.status(400).send(
        generateResponse({
          error: response.error,
        }),
      );
    }

    if (response) {
      return res.status(200).send(
        generateResponse({
          data: {
            email: email,
          },
        }),
      );
    }

    await db.User.create({
      firebase_id: uid,
      email: email,
    });

    res.status(201).send(
      generateResponse({
        data: {
          email: email,
        },
      }),
    );
  } catch (error) {
    next(error);
  }
}

async function signOut(req, res) {
  req.signOut();

  res.status(200).send(
    generateResponse({
      data: "OK",
    }),
  );
}

async function fetchUsers(req, res, next) {
  try {
    const dbResponse = await db.User.find();

    if (dbResponse.error) {
      res.status(400).send(
        generateResponse({
          error: dbResponse.error,
        }),
      );
    }

    res.status(200).send(
      generateResponse({
        data: dbResponse.data,
      }),
    );
  } catch (error) {
    next(error);
  }
}

async function fetchUserById(req, res, next) {
  const {
    params: { id: userId },
    query: { fullFetch },
  } = req;

  try {
    const dbResponse = await db.User.findById(userId);

    if (!dbResponse) {
      res.status(400).send(
        generateResponse({
          error: dbResponse.error,
        }),
      );
    }

    res.status(200).send(
      generateResponse({
        data: dbResponse.data,
      }),
    );
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signIn: signIn,
  signOut: signOut,
  fetchUsers: fetchUsers,
  fetchUserById: fetchUserById,
};
