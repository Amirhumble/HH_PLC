import { describe, it, expect } from 'vitest';
import { COMPANY_INFO, SERVICES, PROJECTS, TEAM_MEMBERS } from '../utils/constants';

describe.skip('Constants', () => {
  describe('COMPANY_INFO', () => {
    it('should have all required fields', () => {
      expect(COMPANY_INFO.name).toBeDefined();
      expect(COMPANY_INFO.tagline).toBeDefined();
      expect(COMPANY_INFO.address).toBeDefined();
      expect(COMPANY_INFO.phones).toBeDefined();
      expect(COMPANY_INFO.emails).toBeDefined();
      expect(COMPANY_INFO.social).toBeDefined();
    });

    it('should have at least one phone number', () => {
      expect(Array.isArray(COMPANY_INFO.phones)).toBe(true);
      expect(COMPANY_INFO.phones.length).toBeGreaterThan(0);
    });

    it('should have at least one email', () => {
      expect(Array.isArray(COMPANY_INFO.emails)).toBe(true);
      expect(COMPANY_INFO.emails.length).toBeGreaterThan(0);
    });

    it('should have social media links', () => {
      expect(COMPANY_INFO.social.facebook).toBeDefined();
      expect(COMPANY_INFO.social.linkedin).toBeDefined();
    });
  });

  describe('SERVICES', () => {
    it('should be an array', () => {
      expect(Array.isArray(SERVICES)).toBe(true);
    });

    it('should have multiple services', () => {
      expect(SERVICES.length).toBeGreaterThan(0);
    });

    it('each service should have required fields', () => {
      SERVICES.forEach((service) => {
        expect(service.id).toBeDefined();
        expect(service.title_en).toBeDefined();
        expect(service.title_am).toBeDefined();
        expect(service.description_en).toBeDefined();
        expect(service.description_am).toBeDefined();
        expect(service.icon).toBeDefined();
      });
    });
  });

  describe('PROJECTS', () => {
    it('should be an array', () => {
      expect(Array.isArray(PROJECTS)).toBe(true);
    });

    it('should have multiple projects', () => {
      expect(PROJECTS.length).toBeGreaterThan(0);
    });

    it('each project should have required fields', () => {
      PROJECTS.forEach((project) => {
        expect(project.id).toBeDefined();
        expect(project.title_en).toBeDefined();
        expect(project.title_am).toBeDefined();
        expect(project.category).toBeDefined();
        expect(project.category_am).toBeDefined();
        expect(project.image).toBeDefined();
        expect(project.location).toBeDefined();
        expect(project.client).toBeDefined();
        expect(project.value).toBeDefined();
        expect(project.description_en).toBeDefined();
      });
    });

    it('should have featured projects', () => {
      const featuredProjects = PROJECTS.filter((p) => p.featured);
      expect(featuredProjects.length).toBeGreaterThan(0);
    });
  });

  describe('TEAM_MEMBERS', () => {
    it('should be an array', () => {
      expect(Array.isArray(TEAM_MEMBERS)).toBe(true);
    });

    it('should have multiple team members', () => {
      expect(TEAM_MEMBERS.length).toBeGreaterThan(0);
    });

    it('each team member should have required fields', () => {
      TEAM_MEMBERS.forEach((member) => {
        expect(member.id).toBeDefined();
        expect(member.name).toBeDefined();
        expect(member.role_en).toBeDefined();
        expect(member.role_am).toBeDefined();
        expect(member.bio_en).toBeDefined();
        expect(member.bio_am).toBeDefined();
        expect(member.photo).toBeDefined();
      });
    });
  });
});
