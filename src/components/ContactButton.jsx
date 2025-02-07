import Link from "next/link";

export default function ContactButton() {
  return (
    <Link
      href="/get-in-touch"
      className="fixed bottom-10 right-6 bg-white flex items-center gap-3 text-secondary font-semibold text-lg py-[2px] border-2 border-secondary px-6 rounded-full shadow-lg hover:bg-black transition-transform transform hover:scale-105"
    >
      Get In Touch
      <img src="/contact.svg" alt="" className="text-secondary h-6 " />
    </Link>
  );
}
