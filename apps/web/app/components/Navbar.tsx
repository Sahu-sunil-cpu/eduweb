

export default function Navbar() {

    return (
        <>
          <div className="bg-white flex justify-between items-center px-6 py-4 shadow">
        <div className="text-2xl font-bold">
          STRUCT<span className="text-blue-600">X</span>
        </div>
        <div className="space-x-6 text-lg">
          <a href="#" className="hover:underline">Papers</a>
          <a href="#" className="hover:underline">Books</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Login</a>
        </div>
      </div>
        </>
    )
}