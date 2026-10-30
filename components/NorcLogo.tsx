"use client";

export function NorcLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* N icon: placeholder until real logo is imported */}
      <div className="relative w-8 h-8">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="32" height="32" rx="4" fill="#166534" />
          <path
            d="M8 8h3.5l8 12V8H23v16h-3.5l-8-12V24H8V8z"
            fill="white"
          />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[15px] font-bold tracking-tight text-gray-900">norc</span>
        <span className="text-[8px] font-semibold tracking-widest text-gray-500 uppercase">Technology</span>
      </div>
    </div>
  );
}
