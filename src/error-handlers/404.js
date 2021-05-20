'use strict';
module.exports = (req, res) => {
  res.status(404).json({
    status: 404,
    message:
      'seems like beheemoth took the file to the upside down, file is not exist right now',
  });
};
