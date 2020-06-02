
export type CommentsType = {
    id: number
    comment: string
    likes: number
  }
  
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  
export type PhotosType = {
      small: string | null
      large: string | null
  }
  
export  type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
  }

export type UserType = {
    name: string
    id: number
    photos: PhotosType
    status: null | string
    followed: boolean
}

export type DialogType = {
    id: number;
    name: string;
  };
  
export type MessageType = {
    id: number;
    message: string;
  };