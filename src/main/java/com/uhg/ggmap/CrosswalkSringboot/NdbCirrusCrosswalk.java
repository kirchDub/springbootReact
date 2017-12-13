package com.uhg.ggmap.CrosswalkSringboot;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ggmap_cirrus_pricing_xwalk")
public class NdbCirrusCrosswalk {
	
	@Id
	@Column(name="id")
	private Integer id;
	
	@Column(name="providerId")
	private String providerId;
	
	@Column(name="ndbMarket")
	private String ndbMarket;
	
	@Column(name="ndbFeeSchedule")
	private String ndbFeeSchedule;
	
	@Column(name="pricingSetId")
	private String pricingSetId;
	
	@Column(name="parallel_process")
	private String parallelProcess;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getProviderId() {
		return providerId;
	}

	public void setProviderId(String providerId) {
		this.providerId = providerId;
	}

	public String getNdbMarket() {
		return ndbMarket;
	}

	public void setNdbMarket(String ndbMarket) {
		this.ndbMarket = ndbMarket;
	}

	public String getNdbFeeSchedule() {
		return ndbFeeSchedule;
	}

	public void setNdbFeeSchedule(String ndbFeeSchedule) {
		this.ndbFeeSchedule = ndbFeeSchedule;
	}

	public String getPricingSetId() {
		return pricingSetId;
	}

	public void setPricingSetId(String pricingSetId) {
		this.pricingSetId = pricingSetId;
	}

	public String getParallel_process() {
		return parallelProcess;
	}

	public void setParallel_process(String parallel_process) {
		this.parallelProcess = parallel_process;
	}
	
	

}
