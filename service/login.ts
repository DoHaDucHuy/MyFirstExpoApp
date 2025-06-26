import { db, ref, get, child } from '@/components/connect';
import { onValue, off } from 'firebase/database';
import { User } from '@/types/User';

/**
 * Kiểm tra kết nối tới Firebase Realtime Database.
 * @returns Promise<boolean> - true nếu kết nối, false nếu không
 */
export const checkConnection = (): Promise<boolean> => {
  return new Promise((resolve) => {
    try {
      const connectedRef = ref(db, '.info/connected');

      const unsubscribe = onValue(connectedRef, (snapshot) => {
        const isConnected = snapshot.val() === true;
        resolve(isConnected);
        off(connectedRef); // hủy listener sau khi nhận kết quả
      });
    } catch (error) {
      console.error('❌ Lỗi kết nối đến Firebase:', error);
      resolve(false);
    }
  });
};

/**
 * Tìm user theo userId trong Firebase Realtime Database
 * @param userId - ID của người dùng (ví dụ: "user123")
 * @returns Promise<User | null> - Trả về thông tin user hoặc null nếu không tìm thấy
 */
export async function findUserById(userId: string): Promise<User | null> {
  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `User/${userId}`));
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log('User found:', data);
      const user: User = {
        FullName: data.FullName,
        Gender: data.Gender,
        Username: data.Username,
        Password: data.Password,
      };
      return user;
    } else {
      return null;
    }
  } catch (error: any) {
    return null;
  }
}


/**
 * Kiểm tra userId có tồn tại trong database và password có khớp không
 * @param {string} userId 
 * @param {string} password 
 * @returns {Promise<boolean>} - true nếu hợp lệ, false nếu sai userId hoặc password
 */
export async function checkUserInDatabase(userId: string, password: string) {
  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `User/${userId}`));

    if (snapshot.exists()) {
      const userData = snapshot.val();
      if (userData.password === password) {
        return true; // Đăng nhập thành công
      } else {
        console.log('Sai mật khẩu');
        return false;
      }
    } else {
      console.log('Không tìm thấy userId');
      return false;
    }
  } catch (error) {
    console.error('Lỗi khi kiểm tra user:', error);
    return false;
  }
}