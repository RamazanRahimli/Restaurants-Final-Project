import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// Kullanıcı giriş işlemi
const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Kullanıcıyı email'e göre bul
    const user = await User.findOne({ email });

    // Kullanıcı varsa ve şifre doğru ise
    if (user && (await user.parolaKontrol(password))) {
      // Token oluştur ve HTTP response'a ekle
      generateToken(res, user._id);
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(401).json({ message: 'Email veya parola hatalı' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Yeni kullanıcı kaydı
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Eğer email ile kullanıcı zaten varsa
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Bu email adresi ile zaten bir kullanıcı kayıtlı" });
    }

    // Yeni kullanıcı oluştur
    const user = await User.create({ name, email, password });

    // Kullanıcı oluşturulduysa
    if (user) {
      // Token oluştur ve HTTP response'a ekle
      generateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400).json({ message: "Kullanıcı oluşturulamadı" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Kullanıcı oturumu kapatma
const logoutUser = async (req, res) => {
  try {
    // Cookie'yi sıfırla
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: 'Çıkış yapıldı' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Kullanıcı profilini getirme
const getUserProfile = async (req, res) => {
  try {
    // Middleware'den gelen kullanıcı bilgisini response'a ekle
    res.json({
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Kullanıcı profilini güncelleme
const updateUserProfile = async (req, res) => {
  try {
    // Kullanıcıyı ID'ye göre bul
    const user = await User.findById(req.user._id);

    // Eğer kullanıcı varsa
    if (user) {
      // İlgili alanları güncelle
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }

      // Güncellenmiş kullanıcıyı kaydet ve response'a ekle
      const updatedUser = await user.save();
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
      });
    } else {
      res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
};
