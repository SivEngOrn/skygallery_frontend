export const categories = [
  {
    name: "Sunset/Sunrise",
    image:
      "https://i.pinimg.com/564x/a7/6d/58/a76d58fca9aaeddac182543aaa17eea6.jpg",
  },
  {
    name: "Night sky",
    image:
      "https://i.pinimg.com/564x/0f/a7/1b/0fa71b19c85550383ca2a3f0586dd823.jpg",
  },
  {
    name: "wallpaper",
    image:
      "https://i.pinimg.com/564x/dc/25/f7/dc25f7acb044b1bc1059aae8085dc29f.jpg",
  },
  {
    name: "Sky aesthetic",
    image:
      "https://i.pinimg.com/564x/16/5f/54/165f54af7ef02909614ecf3611898463.jpg",
  },
  {
    name: "photo",
    image:
      "https://i.pinimg.com/564x/c6/03/a1/c603a1203435a63b5f696ab7a7e5a3c2.jpg",
  },
  {
    name: "Sky colors",
    image:
      "https://i.pinimg.com/564x/a5/c5/29/a5c529a7891484b12620e7913513b0d7.jpg",
  },
  {
    name: "Sky textures",
    image:
      "https://i.pinimg.com/564x/f3/03/3b/f3033b85e9599a1dbf9a7e48bb47698d.jpg",
  },
  {
    name: "Sky landscapes",
    image:
      "https://i.pinimg.com/564x/df/56/58/df565865c6d49dc5d4fe48a04361f909.jpg",
  },
  {
    name: "Sky inspiration",
    image:
      "https://i.pinimg.com/564x/39/d2/9b/39d29b7b36fe930c352f734781f529e2.jpg",
  },
  {
    name: "Sky portriat",
    image:
      "https://i.pinimg.com/564x/d6/c2/d7/d6c2d7e8df416f66bb431c61ffe0d149.jpg",
  },
  {
    name: "others",
    image:
      "https://i.pinimg.com/564x/e3/f2/fb/e3f2fb0ccc206e78ddd39f91e60a5dca.jpg",
  },
];

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    } `;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            destination,
            postedBy->{
              _id,
              userName,
              image
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                image
              },
            },
          }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};
