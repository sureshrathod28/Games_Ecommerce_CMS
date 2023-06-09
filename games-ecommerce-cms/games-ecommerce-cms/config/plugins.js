module.exports = ({ env }) => ({
    // Other plugin configurations...
    'content-manager': {
      config: {
        populate: ['assets'], // Add this line to include the 'image' field in the API response
      },
    },
  });
  