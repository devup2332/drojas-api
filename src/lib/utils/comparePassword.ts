import bcrypt from 'bcryptjs'

export const comparePasswords = async (password:string,hash:string) => {
    return await bcrypt.compare(password,hash)
}