async function getStatus(res) {
  try {
    res.status(200).json({ 
      healthy: true,
      message: "API Service is working!"
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({ error });
  }
}

module.exports = { getStatus };

