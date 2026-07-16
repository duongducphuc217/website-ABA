import { createClient } from "@supabase/supabase-js";

// Sử dụng placeholder hợp lệ nếu chưa cấu hình biến môi trường để tránh lỗi crash build trong Next.js
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-project.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.warn("CẢNH BÁO: Thiếu biến môi trường NEXT_PUBLIC_SUPABASE_URL hoặc NEXT_PUBLIC_SUPABASE_ANON_KEY. Đang sử dụng giá trị placeholder để tránh crash build.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
