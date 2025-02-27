# -*- encoding: utf-8 -*-
# stub: hashr 0.0.22 ruby lib

Gem::Specification.new do |s|
  s.name = "hashr"
  s.version = "0.0.22"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Sven Fuchs"]
  s.date = "2012-08-22"
  s.description = "Simple Hash extension to make working with nested hashes (e.g. for configuration) easier and less error-prone."
  s.email = "svenfuchs@artweb-design.de"
  s.homepage = "http://github.com/svenfuchs/hashr"
  s.rubyforge_project = "[none]"
  s.rubygems_version = "2.4.5"
  s.summary = "Simple Hash extension to make working with nested hashes (e.g. for configuration) easier and less error-prone"

  s.installed_by_version = "2.4.5" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rake>, [">= 0"])
      s.add_development_dependency(%q<test_declarative>, [">= 0.0.2"])
    else
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<test_declarative>, [">= 0.0.2"])
    end
  else
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<test_declarative>, [">= 0.0.2"])
  end
end
