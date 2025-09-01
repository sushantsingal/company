import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Clock,
  Keyboard,
  FolderOpen,
  MessageCircle,
  Search,
} from "lucide-react";

const ITEMS_PER_PAGE = 6;

const PortfolioPage = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [...new Set(projects.map((p) => p.category).filter(Boolean))];
  const allTags = [...new Set(projects.flatMap((p) => p.tags || []))];

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/portfolio`)
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch portfolio items.");
        setLoading(false);
      });
  }, []);

  const filteredProjects = projects.filter((p) => {
    const matchesSearch = p.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? p.category === categoryFilter : true;
    const matchesTag = selectedTag ? (p.tags || []).includes(selectedTag) : true;
    return matchesSearch && matchesCategory && matchesTag;
  });

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="bg-[#f1f7fb]  text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2563eb] to-[#db2777] text-white py-10 text-center">
        <motion.h1 className="text-6xl font-bold mb-4" initial="hidden" animate="visible" viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}>
          Insights
        </motion.h1>
        <motion.p className="max-w-2xl mx-auto text-lg text-gray-300" initial="hidden" animate="visible" custom={1} viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}>
          Explore how we solve real-world business problems with our digital strategies.
        </motion.p>
      </section>
      <div className="max-w-7xl mx-auto grid grid-cols-1 py-16 lg:grid-cols-4 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {loading ? (
            <p className="text-center text-gray-600">Loading portfolio...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : filteredProjects.length === 0 ? (
            <p className="text-center text-gray-500">No portfolio items available.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {paginatedProjects.map((project, index) => (
                  <motion.a
                    href={`/portfolio/${project.slug || project.id}`}
                    key={project.id}
                    viewport={{ once: true }}
                    variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                    className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition block"
                  >
                    <img
                      src={project.image ? `${import.meta.env.VITE_BACKEND_URL}${project.image}` : "/placeholder.png"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                      <div className="flex flex-wrap items-center text-sm text-gray-500 gap-3 mb-3">
                        <div className="flex items-center gap-1"><Clock className="text-pink-500" /> {project.date}</div>
                        <div className="flex items-center gap-1"><Keyboard className="text-pink-500" /> {project.author}</div>
                        <div className="flex items-center gap-1"><FolderOpen className="text-pink-500" /> {project.category}</div>
                        <div className="flex items-center gap-1"><MessageCircle className="text-pink-500" /> {project.comments || "0"}</div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                      <span className="text-pink-600 font-medium hover:underline text-sm">Read More →</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-8 gap-4">
                  <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-pink-600 text-white hover:bg-blue-600 rounded disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-gray-600">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-pink-600 text-white hover:bg-blue-600 rounded disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Sidebar */}
        <aside className="bg-white shadow rounded-xl p-6 space-y-6 h-fit sticky">
          {/* Search */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Search</label>
            <div className="flex items-center border-2 rounded-lg px-3 py-2 hover:border-pink-600">
              <Search className="w-4 h-4 text-gray-400 mr-2 " />
              <input
                type="text"
                className="w-full outline-none text-sm text-gray-700 bg-white"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          {/* Categories */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Categories</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setCategoryFilter(cat === categoryFilter ? "" : cat);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1 rounded-full text-sm ${categoryFilter === cat ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-600"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Tags</label>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSelectedTag(tag === selectedTag ? "" : tag);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1 rounded-full text-sm ${selectedTag === tag ? "bg-pink-400 text-white" : "bg-gray-200 text-gray-600"}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PortfolioPage;