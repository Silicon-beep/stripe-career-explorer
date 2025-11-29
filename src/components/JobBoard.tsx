import { useState, useMemo } from "react";
import { Search, ChevronDown, ArrowRight, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  jobs,
  getUniqueTeams,
  getUniqueLocations,
  getUniqueJobTypes,
  locationToCountry,
} from "@/data/jobs";

const JobBoard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedJobType, setSelectedJobType] = useState<string>("all");

  const teams = useMemo(() => getUniqueTeams(), []);
  const locations = useMemo(() => getUniqueLocations(), []);
  const jobTypes = useMemo(() => getUniqueJobTypes(), []);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTeam = selectedTeam === "all" || job.team === selectedTeam;
      const matchesLocation =
        selectedLocation === "all" || job.location === selectedLocation;
      const matchesJobType =
        selectedJobType === "all" || job.jobType === selectedJobType;

      return matchesSearch && matchesTeam && matchesLocation && matchesJobType;
    });
  }, [searchQuery, selectedTeam, selectedLocation, selectedJobType]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTeam("all");
    setSelectedLocation("all");
    setSelectedJobType("all");
  };

  const hasActiveFilters =
    searchQuery ||
    selectedTeam !== "all" ||
    selectedLocation !== "all" ||
    selectedJobType !== "all";

  const getCountryFlag = (location: string) => {
    const countryCode = locationToCountry[location];
    if (!countryCode) return null;
    return (
      <img
        src={`https://flagcdn.com/20x15/${countryCode.toLowerCase()}.png`}
        alt={countryCode}
        className="h-3.5 w-5 object-cover rounded-sm"
      />
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">stripe</span>
              <span className="text-xl font-light text-muted-foreground">JOBS</span>
            </a>
            <nav className="hidden items-center gap-6 md:flex">
              <a href="#" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
                Our opportunity
              </a>
              <a href="#" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
                Life at Stripe
              </a>
              <a href="#" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
                Benefits
              </a>
              <a href="#" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
                University
              </a>
            </nav>
          </div>
          <Button variant="default" size="sm" className="gap-1">
            See open roles
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/30 to-background py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Expand economic access across the globe
              </h1>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <a
                href="#"
                className="group flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
              >
                <span className="h-4 w-0.5 bg-primary" />
                <span className="font-medium">Bridge open roles</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="group flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
              >
                <span className="h-4 w-0.5 bg-primary" />
                <span className="font-medium">Privy open roles</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 z-40 border-b border-border bg-background py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            {/* Search Input */}
            <div className="relative flex-1 md:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search roles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Location Filter */}
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      <span className="flex items-center gap-2">
                        {getCountryFlag(location)}
                        {location}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Team/Category Filter */}
              <Select value={selectedTeam} onValueChange={setSelectedTeam}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Job Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {teams.map((team) => (
                    <SelectItem key={team} value={team}>
                      {team}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Job Type Filter */}
              <Select value={selectedJobType} onValueChange={setSelectedJobType}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {jobTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filteredJobs.length}
              </span>{" "}
              {filteredJobs.length === 1 ? "role" : "roles"}
            </p>
          </div>
        </div>
      </section>

      {/* Job Table */}
      <main className="container mx-auto px-4 py-6">
        <div className="overflow-hidden rounded-lg border border-border">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 border-b border-border bg-muted/50 px-4 py-3 text-sm font-medium text-muted-foreground">
            <div className="col-span-6 md:col-span-5">Role</div>
            <div className="col-span-3 md:col-span-4">Team</div>
            <div className="col-span-3">Location</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-border">
            {filteredJobs.map((job) => (
              <a
                key={job.id}
                href={job.url}
                className="group grid grid-cols-12 gap-4 px-4 py-4 transition-colors hover:bg-muted/30"
              >
                <div className="col-span-6 md:col-span-5">
                  <span className="font-medium text-primary transition-colors group-hover:text-primary/80">
                    {job.title}
                  </span>
                  <span className="ml-2 hidden text-xs text-muted-foreground md:inline">
                    {job.jobType !== "Full-time" && (
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-accent-foreground">
                        {job.jobType}
                      </span>
                    )}
                  </span>
                </div>
                <div className="col-span-3 md:col-span-4 flex items-center text-sm text-foreground/80">
                  {job.team}
                </div>
                <div className="col-span-3 flex items-center gap-2 text-sm text-foreground/80">
                  {getCountryFlag(job.location)}
                  <span className="truncate">{job.location}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              No roles found
            </h3>
            <p className="mb-4 text-muted-foreground">
              Try adjusting your search or filters
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear all filters
            </Button>
          </div>
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
