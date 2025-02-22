import { useEffect, useState } from "react";
import Link from "next/link"; // Link 컴포넌트 import 추가

export default function Navbar() {
  const [session, setSession] = useState(null);

  return (
    <nav className="container mx-auto rounded-lg bg-white p-4 text-black shadow-md">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link href="/" className="rounded-md px-4 py-2 transition-colors hover:bg-gray-100">
            Todo App
          </Link>
        </div>
        <div className="flex flex-row text-sm">
          {!session ? (
            <>
              <Link href="/signup" className="rounded-md px-4 py-2 transition-colors hover:bg-gray-100">
                회원가입
              </Link>
              <Link href="/signin" className="rounded-md px-4 py-2 transition-colors hover:bg-gray-100">
                로그인
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard" className="rounded-md px-4 py-2 transition-colors hover:bg-gray-100">
                대시보드
              </Link>
              <button
                // onClick={handleLogout}
                className="rounded-md px-4 py-2 transition-colors hover:bg-gray-100">
                로그아웃
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
