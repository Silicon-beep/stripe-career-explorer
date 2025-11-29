import { useState, useMemo } from "react";
import { Search, MapPin, Users, Briefcase, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jobs, getUniqueTeams, getUniqueLocations } from "@/data/jobs";
import { motion, AnimatePresence } from "framer-motion";

const JobBoard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const teams = useMemo(() => getUniqueTeams(), []);
  const locations = useMemo(() => getUniqueLocations(), []);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTeam = selectedTeam === "all" || job.team === selectedTeam;
      const matchesLocation =
        selectedLocation === "all" || job.location === selectedLocation;

      return matchesSearch && matchesTeam && matchesLocation;
    });
  }, [searchQuery, selectedTeam, selectedLocation]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTeam("all");
    setSelectedLocation("all");
  };

  const hasActiveFilters =
    searchQuery || selectedTeam !== "all" || selectedLocation !== "all";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Join Our Team
            </h1>
            <p className="text-lg text-primary-foreground/80 md:text-xl">
              Find your next opportunity. We're looking for people who want to
              make an impact.
            </p>
          </motion.div>
        </div>
        <div className="absolute -bottom-1 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </header>

      {/* Filters Section */}
      <section className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search roles, teams, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Team Filter */}
            <Select value={selectedTeam} onValueChange={setSelectedTeam}>
              <SelectTrigger className="w-full md:w-[200px]">
                <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="All Teams" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Teams</SelectItem>
                {teams.map((team) => (
                  <SelectItem key={team} value={team}>
                    {team}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Location Filter */}
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-full md:w-[220px]">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm font-medium text-accent-foreground transition-colors hover:text-primary"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <main className="container mx-auto px-4 py-8">
        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              {filteredJobs.length}
            </span>{" "}
            {filteredJobs.length === 1 ? "position" : "positions"} found
          </p>
        </div>

        {/* Job List */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job, index) => (
              <motion.a
                key={job.id}
                href={job.url}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-primary/30 hover:bg-card-hover hover:shadow-card-hover md:p-5"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {job.title}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" />
                          {job.team}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary ml-4" />
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              No positions found
            </h3>
            <p className="mb-4 text-muted-foreground">
              Try adjusting your search or filters
            </p>
            <button
              onClick={clearFilters}
              className="text-sm font-medium text-primary hover:underline"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Can't find what you're looking for?{" "}
            <a href="#" className="font-medium text-primary hover:underline">
              Send us your resume
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default JobBoard;
