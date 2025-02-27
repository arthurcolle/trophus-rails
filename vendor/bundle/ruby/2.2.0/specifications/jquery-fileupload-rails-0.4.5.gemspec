# -*- encoding: utf-8 -*-
# stub: jquery-fileupload-rails 0.4.5 ruby lib

Gem::Specification.new do |s|
  s.name = "jquery-fileupload-rails"
  s.version = "0.4.5"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Tors Dalid"]
  s.date = "2015-03-20"
  s.description = "jQuery File Upload by Sebastian Tschan integrated for Rails 3.1+ Asset Pipeline"
  s.email = ["cletedalid@gmail.com"]
  s.homepage = "https://github.com/tors/jquery-fileupload-rails"
  s.rubyforge_project = "jquery-fileupload-rails"
  s.rubygems_version = "2.4.5"
  s.summary = "jQuery File Upload for Rails 3.1+ Asset Pipeline"

  s.installed_by_version = "2.4.5" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<railties>, [">= 3.1"])
      s.add_runtime_dependency(%q<actionpack>, [">= 3.1"])
      s.add_development_dependency(%q<rails>, [">= 3.1"])
      s.add_runtime_dependency(%q<sass>, [">= 3.2"])
    else
      s.add_dependency(%q<railties>, [">= 3.1"])
      s.add_dependency(%q<actionpack>, [">= 3.1"])
      s.add_dependency(%q<rails>, [">= 3.1"])
      s.add_dependency(%q<sass>, [">= 3.2"])
    end
  else
    s.add_dependency(%q<railties>, [">= 3.1"])
    s.add_dependency(%q<actionpack>, [">= 3.1"])
    s.add_dependency(%q<rails>, [">= 3.1"])
    s.add_dependency(%q<sass>, [">= 3.2"])
  end
end
