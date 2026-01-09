# Change Impact Report
Generated: {{ISO_TIMESTAMP}}

## Change Request Summary
{{CONCISE_RESTATEMENT_OF_REQUEST}}

## Impact Analysis

### Affected Components
- [ ] Business Goals (UCO.business_goals)
- [ ] Content (UCO.content)
- [ ] Design System (VAL)
- [ ] Technical Requirements (UCO.technical_requirements)
- [ ] Code (src/)

### Detailed Impact

**1. Homepage Hero Section**
- Change: Client wants different headline
- Impact: UCO.content.core_messaging.hero_headline update required
- Downstream: HeroSection.tsx component update

**2. Color Scheme**
- Change: Client wants warmer color palette
- Impact: `src/lib/constants.ts` colors update, `tailwind.config.ts` update
- Downstream: All components styling update

... (for each affected area)

## Work Plan

### Steps to Re-Execute

1. **Step 2: Update UCO** (30 min)
   - Update affected sections
   - Review dependencies
   
2. **Step 4: Refactor Components** (if design changed) (2-3 hours)
   - Update React components
   - Preserve all visual details
   - Test changes
   
3. **Step 5: Polish** (30 min - 1 hour)
   - Update integrations
   - Test interactions
   
4. **Step 6: QA Re-run** (1 hour)
   - Full test suite
   
5. **Step 8: Redeploy** (30 min)
   - CI/CD automatic

### Estimate

- **Time:** 4-7 hours
- **Complexity:** Medium
- **Risk:** Low (isolated changes) / Medium (cross-cutting changes) / High (architectural changes)

## Recommendation

{{PROFESSIONAL_RECOMMENDATION}}

Example:
"This change is feasible and relatively low-risk. It primarily affects the content layer and can be implemented without significant design overhaul. However, I recommend batching it with any other content changes to minimize iteration cycles."

## Confirmation

To proceed with this change implementation, please confirm:
1. You understand the scope of work outlined above
2. You approve the estimated time/cost
3. You are ready to provide any additional required information

Please reply with "Approved" to proceed, or let me know if you'd like to discuss any aspect of this plan.