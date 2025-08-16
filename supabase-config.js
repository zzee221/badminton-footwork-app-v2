// Supabase配置
const SUPABASE_URL = 'https://wgnjlzlerxcolctifojd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indnbmpsemxlcnhjb2xjdGlmb2pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxNDY3MjcsImV4cCI6MjA3MDcyMjcyN30.3VrOS8Sf3x7QNc0qVjMgGfrkynV9MFFT4n4k8VZgysM';

// 初始化Supabase客户端
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 导出配置
window.supabaseConfig = {
    client: supabase,
    url: SUPABASE_URL,
    anonKey: SUPABASE_ANON_KEY
};