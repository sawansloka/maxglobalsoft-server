const mongoose = require('mongoose');

const socialNetworkSchema = new mongoose.Schema(
  {
    facebookLink: {
      type: String,
      trim: true,
      validate: {
        validator(v) {
          return !v || /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL`
      }
    },
    googlePlusLink: {
      type: String,
      trim: true,
      validate: {
        validator(v) {
          return !v || /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL`
      }
    },
    twitterLink: {
      type: String,
      trim: true,
      validate: {
        validator(v) {
          return !v || /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL`
      }
    },
    youtubeLink: {
      type: String,
      trim: true,
      validate: {
        validator(v) {
          return !v || /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL`
      }
    },
    linkedlnLink: {
      type: String,
      trim: true,
      validate: {
        validator(v) {
          return !v || /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL`
      }
    },
    instagramLink: {
      type: String,
      trim: true,
      validate: {
        validator(v) {
          return !v || /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL`
      }
    },
    shortDescription: {
      type: String,
      required: [true, 'Short description required']
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('SocialNetwork', socialNetworkSchema);
